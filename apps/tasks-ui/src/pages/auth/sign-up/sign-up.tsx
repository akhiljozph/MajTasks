import { Box, Button, TextField, Typography } from "@mui/material";

import "./sign-up.modules.scss";
import { Controller, useForm } from "react-hook-form";

import { ISignUpFormInputs } from "./sign-in.types";

export function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm<ISignUpFormInputs>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => event.preventDefault();

    const onSubmit = (data: ISignUpFormInputs) => {
        console.log('Sign up Payload', data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="sign-up-box"
        >
            <Typography variant="h3" component="h1">
                Sign Up
            </Typography>

            <Controller
                name="email"
                control={control}
                rules={{
                    required: 'Email is required!',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address!' }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        autoComplete="email"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                rules={{
                    required: 'Password is required!',
                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        onPaste={handlePaste}
                        slotProps={{
                            htmlInput: {
                                'aria-invalid': !!errors
                            }
                        }}
                    />
                )}
            />

            <Controller
                name="confirmPassword"
                control={control}
                rules={{
                    required: 'Password confirmation is required!'
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                        onPaste={handlePaste}
                        slotProps={{
                            htmlInput: {
                                'aria-invalid': !!errors
                            }
                        }}
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth size="large">
                Sign Up
            </Button>
        </Box>
    );
}

export default SignUp;
