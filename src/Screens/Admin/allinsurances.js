import React from 'react'

export default function allinsurances() {
    return (
        <div>
            <SuperNav cook={token} />
            <div className="card mb-3 container" style={{ padding: 5, margin: 10 }}>
                <div className="row g-0">
                    <div className="col-md-6" style={{ padding: 10, }} >
                        <div className="h3">Admins</div>
                        <div style={{ marginTop: 2 }}>
                            <Card.Group items={items} />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ padding: 10 }}>
                        <div className="h3">Students</div>
                        <div style={{ marginTop: 2 }} >
                            <Card.Group items={queueItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
