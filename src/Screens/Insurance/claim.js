import React from 'react'


// import { useState } from 'react';


export default function claim() {
  // const router = useRouter();
  // const [Prececription, setPrececription] = useState("");
  // const [UPRNPhoto, setUPRNPhoto] = useState();
  // const [desease, setDesease] = useState("");
  // const [Passward, setPassward] = useState("");

  // const handle_desease=(val)=>{
  //     if(val=="1")
  //     {
  //         setDesease("Cough");
  //     }
  //     else if(val=="2")
  //     {
  //         setDesease("Fewer");
  //     }
  //     else if(val=="3")
  //     {
  //         setDesease("Cancer");
  //     }
  //     else if(val=="4")
  //     {
  //         setDesease("Covid");
  //     }
  //     console.log(desease);
  // }

  // const uprnPhoto=async(e) => {
  //     const image = e.target.files[0]

  //     const blob = await new Promise((resolve, reject) => {
  //         const xhr = new XMLHttpRequest();
  //         xhr.onload = function () {
  //             resolve(xhr.response);
  //         };
  //         xhr.onerror = function (e) {
  //             console.log(e);
  //             reject(new TypeError('Network request failed'));
  //         };
  //         xhr.responseType = 'blob';
  //         xhr.open('GET', image, true);
  //         xhr.send(null);
  //     });
  //     const ref = firebase
  //         .storage()
  //         .ref()
  //         .child(uuid.v4() + Name);
  //     const snapshot = await ref.put(blob);
  //     // We're done with the blob, close and release it
  //     // blob.close();
  //     const url = await snapshot.ref.getDownloadURL();
  //     setUPRNPhoto(url);
  // }

  // const handleClick = async (event)=>{
  //     event.preventDefault();
  //     if(1)
  //     {
  //         try{
  //             console.log(desease);
  //                 console.log(Prececription);
  //             axios({

  //                 // Endpoint to send files
  //                 url: `http://localhost:8080/adddiseases`,
  //                 method: "POST",
  //                 headers: {

  //                 },

  //                 // Attaching the form data
  //                 data: {
  //                     desease:desease,
  //                     prescription:Prececription
  //                 },
  //               }).then((data)=>{
  //                   console.log(data);
  //                 alert("Data Added successfully");
  //               }).catch((err)=>{
  //                 alert("Something wen Wrong")
  //                   console.log(err);
  //               })
  //               router.reload();
  //         }
  //         catch(err){
  //             console.log("Something Went Wrong")
  //             console.log(err);
  //         }

  //     }
  // }



  return (
    <div className='pt-100'>
      <div className='container mt-3'>
        <div class="form-group mt-3">
          <label for="exampleFormControlTextarea1">Add Description </label>
          <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3" />
          {/* onChange={(e) => { setPrececription(e.target.value); }} */}
        </div>
        <div class="form-group mt-3">
          <label for="exampleFormControlFile1">Upload Proof:</label>
          <br />
          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>
        {/* onClick={handleClick} */}
        <button type="button" class="btn btn-secondary mt-5 " >Apply for claim</button>
      </div >
    </div>

  )
}