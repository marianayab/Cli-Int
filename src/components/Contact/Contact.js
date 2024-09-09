import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      };
    });

  }

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, message } = inputvalue;

    if (fname == "") {
      toast.error("fname is required");
    } else if (lname == "") {
      toast.error("lname is required");
    } else if (email == "") {
      toast.error("email is required");
    } else if (!email.includes("@")) {
      toast.error("invalid email");
    } else if (mobile == "") {
      toast.error("mobile is required");
    } else {
      const res = await fetch("https://port-server-production-8710.up.railway.app/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
      const data = await res.json();
      console.log(data);

if (data.status==201) {
  toast.success("Your Response is Submitted");
}

    }
  };

  return (
    <>
      <div className='cont contact-container pd-tp'>

        <h2 className='text-center text-blue down'><u>Contact for Further Details</u></h2>

        <div className='container'>

          <Form className='row'>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label className='text-blue'>First Name</Form.Label>
              <Form.Control type="text" name='fname' onChange={getvalue} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label className='text-blue'>Last Name</Form.Label>
              <Form.Control type="text" name='lname' onChange={getvalue} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label className='text-blue'>Email</Form.Label>
              <Form.Control type="email" name='email' onChange={getvalue} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label className='text-blue'>Mobile</Form.Label>
              <Form.Control type="number" name='mobile' onChange={getvalue} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='text-blue'>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name='message' onChange={getvalue} />
            </Form.Group>

            <div className='d-flex justify-content-center '>

              <Button variant="info" className='col-lg-6 text-decoration-none submt text-blue hovr' type="submit" onClick={sentUserdata}>
                Submit
              </Button>

            </div>

          </Form>
          <ToastContainer />

        </div>

      </div>

    </>
  )
}

export default Contact