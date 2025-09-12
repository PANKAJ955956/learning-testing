import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";

import Loginform from "./LoginForm";

test("User Can type username and password & submits the form", () => {
    // create mock -->
    const mockLogin = jest.fn();

    render(<Loginform onLogin={mockLogin}/>);
    fireEvent.change(screen.getByLabelText(/username/i ),{
        target: {value: "Ayush"}
    });

    fireEvent.change(screen.getByLabelText(/password/i ),{
        target: {value: "1234"}
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(mockLogin).toHaveBeenCalledWith({
        username: "Ayush",
        password: "1234"
    });
});