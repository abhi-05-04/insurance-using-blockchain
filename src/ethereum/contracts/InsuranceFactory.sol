pragma solidity ^0.4.17;

contract InsuranceFactory{
    address[] public deployedInsurances; //addresses of all deployed campaigns
    address public admin;
    mapping(address => address) public getInsurenceId;

    modifier restricited() {
        require(msg.sender == admin);
        _;
    }

    function InsuranceFactory() public {
        admin = msg.sender;
    }

    //Deploys a new instance of a Insurance and stores the resulting address
    function createInsurance(string name, uint minimum, uint claimPer) public {
        address newInsurance = new Insurance(name, minimum, claimPer, msg.sender);
        deployedInsurances.push(newInsurance);
        getInsurenceId[msg.sender] = newInsurance;
    }
    
    //Returns a list of all deployed Insurances
    function getDeployedInsurances() public view returns (address[]) {
        return deployedInsurances;
    }
}

contract Insurance{
    
    struct Claim{
        string description;
        string descriptondoc; //describes why the Claim is being send
        uint value;  //amount of money that manager wants to send to vendor
        address recipient; //address that money will be sent to
        address member;
        bool complete;
        bool approve; //true if the Claim has already been processed
        uint approvalCount; //tracks numbers of approvals
        mapping(address => bool) approvals; //tracks who have voted
    }
    
    struct Members{
        address memberMetaMask;
        string name;
        string aadhar;
        string email;
        string mobile;
        string aadharId;
        address nomineeMetaMask;
        uint ethers;
        bool claimed;
    }

    string insuranceName;
    address public manager; //address of person who is managing this campaign
    uint public claimPercentage; //additional value to be awarded after successful claim
    // mapping(address => bool) public members; //list of addresses for every person who has taken insuarance
    Claim[] public claims; //list of claims tht manager has created
    mapping(address => Members) public memberinfo;
    mapping(address => Claim) public claiminfo;
    Members[] public members;
    uint public approversCount; //track the number of members who donated or contributed 
    // mapping(address=>address) public nominee;//nominee=>member
    uint public minAmmount;
    // address[] public memberAddress;
    
    // mapping(address=>uint)public premium;//to keep track who paid how much

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function getName() public view returns(string){
        return insuranceName;
    }
    
    //constructor function that sets claimPercentage and the owner
    function Insurance(string name, uint minimum, uint claimPer, address creator) public {
        insuranceName = name;
        manager = creator;
        minAmmount = minimum;
        claimPercentage = claimPer;
    }
    
    // called when someone wants to donate money to campaignand become an approver
    function contribute(string name,string aadhar,string email, string mobile, string aadharId,address nomineeName) external payable{
        require(msg.value > minAmmount);

        Members memory newMember = Members({
            memberMetaMask: msg.sender,
            name: name,
            aadhar: aadhar,
            email: email,
            mobile: mobile,
            aadharId: aadharId,
            nomineeMetaMask: nomineeName,
            ethers: msg.value + (msg.value * claimPercentage/100),
            claimed: false
        });
        members.push(newMember);
        memberinfo[msg.sender] = newMember;
        approversCount++;
    }

    function renewInsurence() external payable returns(bool)
    {
        uint i=0;
        for(i=0;i<members.length;i++)
        {
            if(msg.sender == members[i].memberMetaMask)
                break;
        }
        if(i != members.length)
        {
            members[i].ethers = msg.value + members[i].ethers;
            members[i].ethers = members[i].ethers + (members[i].ethers * claimPercentage/100);
            return true;
        }
        return false;
    }
    
    //called by manager to create a new spending Claim
    function createClaim(string description, string descriptondoc)public returns(bool){
        uint val;
        address memb;
        uint i=0;
        for(i=0; i < members.length ; i++)
        {
            if(msg.sender == members[i].memberMetaMask || msg.sender == members[i].nomineeMetaMask)
            {
                val = members[i].ethers;
                memb = members[i].memberMetaMask;
                break;
            }

        }
        if(i != members.length)
        {
            Claim memory newClaim = Claim({
                description: description,
                descriptondoc: descriptondoc,
                value: val,
                member: memb,
                recipient: msg.sender,
                complete: false,
                approve: false,
                approvalCount: 0
            });
            claims.push(newClaim);
            claiminfo[memb] = newClaim;
            return true;
        }
        return false;
    }

    function approveClaim(uint index) public restricted returns(bool)
    {
        Claim storage claim = claims[index];
        uint i=0;
        for(i=0; i<members.length ; i++)
        {
            if(claim.recipient == members[i].memberMetaMask || claim.recipient == members[i].nomineeMetaMask)
                break;
        }
        if(i != members.length)
        {
            claim.approve = true;
            return true;
        }
        return false;
    }
    
    //called by each contributor to approve a spending Claim
    function vote(uint index) public returns(bool){
        Claim storage claim = claims[index];
        //TO DO:- checking if nominee claims 
        uint i=0;
        for(i=0;i<members.length;i++)
        {
            if(msg.sender == members[i].memberMetaMask)
                break;
        }
        if(i != members.length)
        {
            require(!claim.approvals[msg.sender]);
        
            claim.approvals[msg.sender] = true;
            claim.approvalCount++;
            return true;
        }
        return false;
    }
    
    //after a Claim has gotten enough approvals, the manager can call this to get money sent to the vendor
    function finalizeClaim(uint index) public restricted returns(bool) {
        Claim storage claim = claims[index];
        uint i=0;
        require(claim.approvalCount > (approversCount / 2));
        require(!claim.complete);
        for(i=0;i < members.length;i++)
        {
            if(claim.recipient == members[i].memberMetaMask || claim.recipient == members[i].nomineeMetaMask)
                break;
        }
        if(i != members.length)
        {
            claim.recipient.transfer(claim.value);
            claim.complete = true;
            members[i].claimed = true;
            return true;
        }
        // require((premium[claim.recipient]!=0) || (premium[nominee[claim.recipient]]!= 0));
        //TO DO:- If nominee is applying then figure out how to authorise
        return false;
    }

    function getMembersList() public view returns(address[])
    {
        uint i=0;
        address[] memory memberAddress=new address[](members.length);
        for(i=0;i < members.length;i++)
        {
            memberAddress[i]=members[i].memberMetaMask;
        }
        return memberAddress;
    }

    function getMembers(address membAddress) public view returns (
        string,
        string,
        string,
        string,
        string,
        address,
        uint,
        bool) 
    {
        Members storage memb = memberinfo[membAddress];
        return (memb.name,
        memb.aadhar,
        memb.email,
        memb.mobile,
        memb.aadharId,
        memb.nomineeMetaMask,
        memb.ethers,
        memb.claimed
        );
    }

    function getClaimList(uint flag) public view returns(address[])
    {
        address[] memory claimAddress=new address[](members.length);
        uint i=0;
        if(flag== 1)
        {
            for(i=0;i < claims.length;i++)
            {
                if(claims[i].approve == true && claims[i].complete == false)
                    claimAddress[i]=claims[i].member;
            }
        }
        else if(flag==2)
        {
            for(i=0;i < claims.length;i++)
            {
                if(claims[i].complete == true)
                    claimAddress[i]=claims[i].member;
            }
        }
        else
        {
            for(i=0;i < claims.length;i++)
            {
                if(claims[i].approve == false)
                claimAddress[i]=claims[i].member;
            }
        }
        return claimAddress;
    }

    function getClaim(address membAddress) public view returns (
        string,
        string,
        uint ,
        address,
        uint,
        uint
        ) 
    {
        uint i=0;
        Claim storage c = claiminfo[membAddress];
        for( i=0;i<claims.length;i++)
        {
            if(c.recipient == claims[i].recipient)
                break;
        }
        return (
        c.description,
        c.descriptondoc,
        c.value,
        c.recipient,
        i,
        c.approvalCount
        );
    }
}