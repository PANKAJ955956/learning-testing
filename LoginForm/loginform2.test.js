import React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Loginform from "./LoginForm";

test("user can type password and username tesing with userevent", async () =>{
    const mocklogin = jest.fn();

    render(<Loginform onLogin={mocklogin} />);

    await userEvent.type(screen.getByLabelText(/username/i), "Ayush");
    await userEvent.type(screen.getByLabelText(/password/i), "1234");

    await userEvent.click(screen.getByText(/login/i));

    expect(mocklogin).toHaveBeenCalledWith({
        username: "Ayush",
        password: "1234"
    });
})

