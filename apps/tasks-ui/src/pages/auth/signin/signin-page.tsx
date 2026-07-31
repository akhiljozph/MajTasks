import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { Controller, useForm } from "react-hook-form";
import { useId, useState } from "react";

import { ISigninPageFormInputs } from "./signin-page.types";
import { RoutePaths } from "../../../routes/route-paths";
import "./signin-page.modules.scss";

function SigninPage() {
    const navigate = useNavigate();
    const formTitleId = useId();
    const formErrorId = useId();
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors, isSubmitted } } = useForm<ISigninPageFormInputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = (data: ISigninPageFormInputs) => {
        console.log(data);
        sessionStorage.setItem('maj-tasks-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30');
        navigate(RoutePaths.APP.PROFILE);
    };

    const errorMessages = [
        errors.email?.message,
        errors.password?.message,
    ].filter(Boolean) as string[];

    return (
        <Box component="main" className="sign-in-page">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                className="sign-in-box"
                noValidate
                aria-labelledby={formTitleId}
                aria-describedby={isSubmitted && errorMessages.length > 0 ? formErrorId : undefined}
            >
                <Typography id={formTitleId} variant="h3" component="h1">
                    Sign In
                </Typography>

                <div
                    id={formErrorId}
                    role="alert"
                    aria-live="assertive"
                    className="visually-hidden"
                >
                    {isSubmitted && errorMessages.length > 0
                        ? `Form has ${errorMessages.length} error${errorMessages.length > 1 ? 's' : ''}: ${errorMessages.join('. ')}`
                        : null}
                </div>

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
                            id="signin-email"
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            slotProps={{
                                htmlInput: {
                                    'aria-required': true,
                                    'aria-invalid': !!errors.email,
                                },
                            }}
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
                            id="signin-password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            autoComplete="current-password"
                            required
                            fullWidth
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            slotProps={{
                                htmlInput: {
                                    'aria-required': true,
                                    'aria-invalid': !!errors.password,
                                },
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                aria-pressed={showPassword}
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff aria-hidden /> : <Visibility aria-hidden />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth size="large">
                    Sign In
                </Button>

                <Typography component="p" className="helper-sign-up">
                    Don&apos;t have an Account?{' '}
                    <Link
                        component={RouterLink}
                        to={RoutePaths.AUTH.SIGN_UP}
                        underline="always"
                    >
                        Create an account.
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default SigninPage;
