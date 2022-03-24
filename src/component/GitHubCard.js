import React from 'react'
import { Card } from 'react-bootstrap'
export default function GitHubCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>GitHub</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">NaheedAwan</Card.Subtitle>
                    <Card.Text>
                      My name is Naheed Awan, currently studying full stack web app development.
                      Student NorthCarolina State Universtiy, Raleigh-Durham.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>

                </Card.Body>
            </Card>
        </div>
    )
}
