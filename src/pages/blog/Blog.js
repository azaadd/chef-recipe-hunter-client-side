import React from 'react';
import './Blog.css';
import { FaDownload } from 'react-icons/fa';

import { jsPDF } from "jspdf";


const Blog = () => {
    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
            pdf.save("questionAnswer.pdf");
        });
    }; 

    return (
        <div className='container'>



            
                <div className='d-flex justify-content-end'>
                    <button onClick={createPDF} className='text-white apply fw-bold'><FaDownload></FaDownload> Download PDF</button>
                </div>
                
                    <div id='pdf' className='question-wrap'>
                        <h3 className='question'>1. Tell us the differences between uncontrolled and controlled components.</h3>
                        <p className='answer'>Answer: </p>
                        <p><strong>Uncontrolled components</strong> are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state.

                            The values of the form elements are traditionally controlled by and stored on the DOM. We will have to refer to the instance of the form elements to retrieve their values from the DOM. <br />

                            <strong>Controlled components</strong> in React are those in which form data is handled by the component’s state.

                            Forms are used to store information in a document section. The information from this form is typically sent to a server to perform an action. This data is held by form input elements and control elements, such as input, select, textarea, etc., which maintain and control their states or values.
                        </p><br />

                        <h3 className='question'>2. How to validate React props using PropTypes ?</h3>
                        <p className='answer'>Answer:</p>
                        <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                            We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in our app.

                            Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. React has an internal mechanism for props validation called PropTypes. </p><br />
                        <h3 className='question'>3. Tell us the difference between node js and express js.</h3>
                        <p className='answer'>Answer:</p>
                        <p><strong>Node js</strong> is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on. <br />

                            <strong>Express js</strong> is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                        </p><br />

                        <h3 className='question'>4. What is a custom hook, and why will you create a custom hook?</h3>
                        <p className='answer'>Answer:</p>
                        <p>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. <br />

                            <br /> If we have one or multiple React hooks that will be used at multiple locations in a code, we should use custom React JS hooks. This helps in making the code more readable and make the code clean.</p>
                    </div>
                
            


        </div>
    );
};


export default Blog;
