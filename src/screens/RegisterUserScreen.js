import { useState,useContext, useEffect } from "react"
import { useHistory, useLocation} from "react-router-dom"
import {Col, Form, Button,Row } from "react-bootstrap"
import {UserContext } from "../contexts/userContext"




const RegisterUserScreen = () => {

    const history = useHistory()
    const location = useLocation()

    const { registerUser,userInfo } = useContext(UserContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const redirect = location.search ? location.search.split("=")[1] : "/login"
    
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    function handleSubmit(e) {
        e.preventDefault()
        const newuser = {
            name,
            email,
            password,
        }
        registerUser(newuser)
    }
    return (
        <div>
            <Row className="justify-centerr-mb-center">
              <Col xs={12} sm={12} md={6} lg={6} className="justify-center border border-white">
                <Form onSubmit={handleSubmit}>
                 <Form.Group>
                     <Form.Label>name</Form.Label>
                     <Form.Control placeholder="enter name" value={name} onChange={(text) => setName(text.target.value)}/>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Email</Form.Label>
                     <Form.Control placeholder="enter email" value={email} onChange={(text) => setEmail(text.target.value)}/>
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Password</Form.Label>
                     <Form.Control placeholder="enter password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                 </Form.Group>
                 <Button type="submit">SIGN UP</Button>
                </Form>
              </Col>
            </Row>
        </div>
    )
}
export default RegisterUserScreen