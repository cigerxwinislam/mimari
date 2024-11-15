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

<KitchenSinkExample nav="BIM" nivis="Bir inşaatın bütün mimarisi..."/>

<KitchenSinkExample nav="Mobilya Tasarımı"/>
</Col>
<Col>  

<KitchenSinkExample nav ="İç Mimar"/>

<KitchenSinkExample/>
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