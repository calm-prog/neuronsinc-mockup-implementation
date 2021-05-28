import { render, fireEvent } from '@testing-library/react'
import TextInput from '../TextInput'

it("render correctly", () => {
    const {queryByPlaceholderText} =  render(<TextInput placeholder="foo"/>);

    expect(queryByPlaceholderText("foo")).toBeTruthy();
})

describe("Input value", () => {
    it("updates on change", () => {
        const onChange = jest.fn();

        const {queryByPlaceholderText} =  render(<TextInput placeholder="foo2" handleChange={onChange}/>);

        function isInputElement(elem: HTMLInputElement | null) {
            if (!elem) {
                console.log("input element is null");
                return false;
            }
            
            fireEvent.change(elem, {target: {value: "test"}});
    
            expect(elem.value).toBe("test");
        }

        const searchInput= queryByPlaceholderText("foo2") as HTMLInputElement;

        isInputElement(searchInput);
    })
})

describe("If the prop 'hasIcon' is set to true, the input type", () => {
    describe("by default", () => {
        it("is password", () => {
            const {queryByTestId} =  render(<TextInput hasIcon={true} title="Password"/>);

            expect(queryByTestId("Password")?.getAttribute("type") === "password").toBeTruthy();
        })
    })

    describe("on click of the visibility button", () => {
        it("toggles to text", () => {
            const {queryByTestId} =  render(<TextInput hasIcon={true} title="Password"/>);
            
            function isInputElement(elem: HTMLElement | null) {
                if (!elem) {
                    console.log("input element is null");
                    return false;
                }
                
                fireEvent.click(elem);

                expect(queryByTestId("Password")?.getAttribute("type") === "text").toBeTruthy();   
            }

            const visibilityBtn = queryByTestId("visibility-icon");

            isInputElement(visibilityBtn);
        })
    })
})