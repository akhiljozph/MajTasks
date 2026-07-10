import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { ISignInFormInputs } from "./sign-in.types";

export function SignIn() {

    const { control, handleSubmit, formState: { errors } } = useForm<ISignInFormInputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: ISignInFormInputs) => {
        console.log('Sign In Payload', data);
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography variant="h3" component="h1">
                Sign In
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
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth size="large">
                Log In
            </Button>
        </Box>
    );
}

export default SignIn;
