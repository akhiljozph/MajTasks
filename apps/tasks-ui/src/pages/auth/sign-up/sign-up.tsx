import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

import "./sign-up.modules.scss";
import { Controller, useForm } from "react-hook-form";

import { ISignUpFormInputs } from "./sign-up.types";

const COUNTRIES = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'IN', name: 'India' },
];

export function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm<ISignUpFormInputs>({
        defaultValues: {
            country: '',
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
                name="country"
                control={control}
                rules={{
                    required: 'Country is required!'
                }}
                render={({ field }) => (
                    <FormControl fullWidth error={!!errors.country}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            {...field}
                            label="Country"
                            slotProps={{
                                root: {
                                    'aria-invalid': !!errors,
                                },
                            }}
                        >
                            <MenuItem value="" disabled>
                                <em>Select a country</em>
                            </MenuItem>
                            {COUNTRIES.map((country) => (
                                <MenuItem key={country.code} value={country.code}>
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {errors && <FormHelperText>{errors.country?.message}</FormHelperText>}
                    </FormControl>
                )}
            />

            <Controller
                name="email"
                control={control}
                rules={{
                    required: 'Email is required!',
                    pattern: { value: /@[^.]+\..+/, message: 'Invalid email address!' }
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
