// Bismillahirahmanirahim



import React from 'react'
import { Container, Row ,Col,Alert} from 'react-bootstrap'
import KitchenSinkExample from './components/card'

function page() {
  return (
    <div>

    
      <Container>
      <Alert>
  
  <Alert></Alert>  
  
  <Alert></Alert>  
    </Alert>  
<Row>

<Col>  

<KitchenSinkExample nav="BIM" wene="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4-Z7virxzOINM_NlyqALK1BKgTxP74fGMg&usqp=CAU"  nivis="Bir inşaatın bütün mimarisi..."/>

<KitchenSinkExample nav="Mobilya Tasarımı"/>
</Col>
<Col>  

<KitchenSinkExample nav ="İç Mimar-Dekorasyon"/>

<KitchenSinkExample nav="Genel Yaklaşım"/>
</Col>
<Alert>
  
<Alert></Alert>  

<Alert></Alert>  
  </Alert>  
  <Col>  

<KitchenSinkExample/>

<KitchenSinkExample/>
</Col>
<Col>  

<KitchenSinkExample/>

<KitchenSinkExample/>
</Col>
<Alert>
  
<Alert></Alert>  

<Alert></Alert>  
  </Alert>  

</Row>




      </Container>
    </div>
  )
}

export default page