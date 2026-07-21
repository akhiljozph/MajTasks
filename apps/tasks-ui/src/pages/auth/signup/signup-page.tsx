import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./signup-page.modules.scss";
import DocViewerModal from "../../../components/shared/modals/doc-viewer/doc-viewer-modal";
import { ISignupPageFormInputs } from "./signup-page.types";

const COUNTRIES = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'IN', name: 'India' },
];

function SignupPage() {

    const [openModal, setOpenModal] = useState(false);
    const [termsAndPoliciesViewed, setTermsAndPoliciesViewed] = useState({
        terms: false,
        policies: false
    })

    const navigate = useNavigate();

    const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm<ISignupPageFormInputs>({
        mode: 'onChange',
        defaultValues: {
            country: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsAndPoliciesAccepted: false
        }
    });

    const passwordValue = watch('password');

    const hasReadBoth = termsAndPoliciesViewed.terms && termsAndPoliciesViewed.policies;

    const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => event.preventDefault();

    const openTermsAndPoliciesModal = (activeDoc: string) => {
        if (activeDoc) {
            setTermsAndPoliciesViewed((prev) => ({ ...prev, [activeDoc]: true }));
        }
        setOpenModal(true);
    }

    const onSubmit = (data: ISignupPageFormInputs) => {
        console.log('Sign up Payload', data);
    };

    const navigateToSignupPage = () => {
        navigate('/auth/sign-in');
    }

    return (
        <>
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
                            autoComplete="new-password"
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
                        required: 'Password confirmation is required!',
                        validate: (value) => value === passwordValue || 'Passwords do not match!'
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            autoComplete="new-password"
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

                <Controller
                    name="termsAndPoliciesAccepted"
                    control={control}
                    rules={{
                        required: 'Terms and Conditions should be accepted!'
                    }}
                    render={({ field }) => (
                        <FormControlLabel
                            control={

                                <Checkbox
                                    {...field}
                                    disabled={!hasReadBoth}
                                    slotProps={{
                                        input: {
                                            'aria-label': 'I accept the Terms of Service and consent to the Privacy Policy.',
                                            'aria-invalid': !!errors
                                        }
                                    }}
                                />
                            }
                            label={
                                <Typography variant="body2">
                                    I have read and agree to the{""}
                                    <Button onClick={() => openTermsAndPoliciesModal('terms')}>
                                        Terms of Service
                                    </Button>{""}
                                    and{""}
                                    <Button onClick={() => openTermsAndPoliciesModal('policies')}>
                                        Privacy Policy.
                                    </Button>
                                </Typography>
                            }
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth size="large" disabled={!isValid}>
                    Sign Up
                </Button>
                <p className="helper-sign-in">Already have an Account? <span onClick={navigateToSignupPage}>Sign in.</span></p>
            </Box>

            <DocViewerModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}

export default SignupPage;
