import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export class BuyParts extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Done Deal</CardHeader>
                    <Card.Body>
                        <img src='https://hello.donedeal.ie/hc/en-us/article_attachments/200438222/logo-no-bg-2-lines-300x2111.png'></img>
                    </Card.Body>
                    <a href='https://www.donedeal.ie/' className="btn btn-primary">Done Deal</a>

                </Card>
                <Card>
                    <CardHeader>Euro Car Parts</CardHeader>
                    <Card.Body>
                        <img src='https://images.lteplatform.com/images/ecp/logo.svg?v=8.97'></img>
                    </Card.Body>
                    <a href='https://www.eurocarparts.com/en_ie' className="btn btn-primary">Euro Car Parts</a>

                </Card>
            </div>

        );
    }
}