import { render, fireEvent } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import LoginForm from '../LoginForm'

let container:any = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

const callEventOnElement = (elem:HTMLElement | null, event: (elem: HTMLElement) => void) => {
    if(!elem){
        throw new Error("could not find HTML element");
    } else {
        event(elem)
    }
}

const submitForm = (submitButton: HTMLElement | null) => {
    callEventOnElement(submitButton, submitButton => fireEvent.click(submitButton))
}

const testEmail = (truthy: boolean, emailAddress: string) => {

    const {container, queryByTestId} = render(<LoginForm></LoginForm>)
        
    let elem = queryByTestId("button");

    const input = queryByTestId("Email");

    callEventOnElement(input, input => fireEvent.change(input, { target: { value: emailAddress }}));
    
    submitForm(elem);

    const errorDiv = container.querySelector("[data-testid='Email'] + .validation-error");

    if(!errorDiv) {
        throw new Error("could not find HTML element");
    } else {
        if(truthy) {
            expect(errorDiv.classList.contains("active")).toBeTruthy();
        } else {
            expect(errorDiv.classList.contains("active")).toBeFalsy();
        }
    }


}

describe("On submission", () => {
    describe("if input is empty", () => {
        test("error div should have an active class", () => {
            const {queryByTestId, queryAllByTestId} = render(<LoginForm />, container)
            
            let submitButton = queryByTestId("button");
            
            submitForm(submitButton);
            
            expect(queryAllByTestId("validation-error")[0].classList.contains("active")).toBeTruthy();
        })
    });

    describe("if input is filled", () => {
        describe("and input type is email", () => {
            describe("and input is invalid email", () => {
                test("error div should have an active class", () => {
                    testEmail(true, "invalidEmailAddress")
                })
            });

            describe("and input is valid email", () => {
                test("error div should NOT have an active class", () => {
                    testEmail(false, "validEmailAddress@test.com")
                })
            })
        })

        describe("and input type is password", () => {
            test("error div should NOT have an active class", () => {
                const {container, queryByTestId} = render(<LoginForm />);

                const input = queryByTestId("Password");

                callEventOnElement(input, input => fireEvent.change(input, { target: { value: "test" }}));

                const submitButton = queryByTestId("button");
            
                submitForm(submitButton);

                const passwordErrorDiv = container.querySelector("[data-testid='Password'] + .validation-error");

                if(!passwordErrorDiv) {
                    throw new Error("could not find HTML element");
                } else {
                    expect(passwordErrorDiv.classList.contains("active")).toBeFalsy();
                }
            })
        })
    })
})