import renderer from 'react-test-renderer'
import { render, screen, cleanup } from '@testing-library/react'
import Button from '../Button'

afterEach(() => {
    cleanup();
})

test("renders button text", () => {
    const component = renderer.create(<Button text="test btn"></Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("should render Button component", () => {
    render(<Button text="test btn"></Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("test btn");
})