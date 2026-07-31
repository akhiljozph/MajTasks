import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    Link,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { useId, useState } from "react";

import DocViewerModal from "../../../components/shared/modals/doc-viewer/doc-viewer-modal";
import { ISignupPageFormInputs } from "./signup-page.types";
import { RoutePaths } from "../../../routes/route-paths";
import styles from "./signup-page.module.scss";
import { useDebounce } from "../../../hooks";

const COUNTRIES = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'IN', name: 'India' },
];

function SignupPage() {
    const formTitleId = useId();
    const formErrorId = useId();
    const countryLabelId = useId();
    const termsHintId = useId();

    const [openModal, setOpenModal] = useState(false);
    const [termsAndPoliciesViewed, setTermsAndPoliciesViewed] = useState({
        terms: false,
        policies: false,
    });

    const debouncedHandleChange = useDebounce((value: string) => {
        console.log(value);
    }, 1000);

    const { control, handleSubmit, watch, formState: { errors, isValid, isSubmitted } } = useForm<ISignupPageFormInputs>({
        mode: 'onChange',
        defaultValues: {
            country: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsAndPoliciesAccepted: false,
        },
    });

    const passwordValue = watch('password');
    const hasReadBoth = termsAndPoliciesViewed.terms && termsAndPoliciesViewed.policies;

    const handleInput: React.InputEventHandler<HTMLDivElement> = ($event) => {
        debouncedHandleChange(($event.target as HTMLInputElement).value);
    };

    const handlePaste = ($event: React.ClipboardEvent<HTMLDivElement>) => {
        $event.preventDefault();
    };

    const openTermsAndPoliciesModal = (
        event: React.MouseEvent<HTMLButtonElement>,
        activeDoc: 'terms' | 'policies',
    ) => {
        event.preventDefault();
        event.stopPropagation();
        setTermsAndPoliciesViewed((prev) => ({ ...prev, [activeDoc]: true }));
        setOpenModal(true);
    };

    const onSubmit = (data: ISignupPageFormInputs) => {
        console.log('Sign up Payload', data);
    };

    const errorMessages = [
        errors.country?.message,
        errors.email?.message,
        errors.password?.message,
        errors.confirmPassword?.message,
        errors.termsAndPoliciesAccepted?.message,
    ].filter(Boolean) as string[];

    return (
        <>
            <Box component="main" className={styles.signUpPage}>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.signUpBox}
                    noValidate
                    aria-labelledby={formTitleId}
                    aria-describedby={isSubmitted && errorMessages.length > 0 ? formErrorId : undefined}
                >
                    <Typography id={formTitleId} variant="h3" component="h1">
                        Sign Up
                    </Typography>

                    <div
                        id={formErrorId}
                        role="alert"
                        aria-live="assertive"
                        className={styles.visuallyHidden}
                    >
                        {isSubmitted && errorMessages.length > 0
                            ? `Form has ${errorMessages.length} error${errorMessages.length > 1 ? 's' : ''}: ${errorMessages.join('. ')}`
                            : null}
                    </div>

                    <Controller
                        name="country"
                        control={control}
                        rules={{
                            required: 'Country is required!',
                        }}
                        render={({ field }) => (
                            <FormControl fullWidth error={!!errors.country} required>
                                <InputLabel id={countryLabelId}>Country</InputLabel>
                                <Select
                                    {...field}
                                    id="signup-country"
                                    labelId={countryLabelId}
                                    label="Country"
                                    required
                                    inputProps={{
                                        'aria-required': true,
                                        'aria-invalid': !!errors.country,
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
                                <FormHelperText id="signup-country-helper">
                                    {errors.country?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required!',
                            pattern: { value: /@[^.]+\..+/, message: 'Invalid email address!' },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="signup-email"
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                autoComplete="email"
                                required
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                onInput={handleInput}
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
                            required: 'Password is required!',
                            minLength: { value: 6, message: 'Password must be at least 6 characters' },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="signup-password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                autoComplete="new-password"
                                error={!!errors.password}
                                helperText={errors.password?.message || 'Pasting is disabled for this field.'}
                                onPaste={handlePaste}
                                slotProps={{
                                    htmlInput: {
                                        'aria-required': true,
                                        'aria-invalid': !!errors.password,
                                    },
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{
                            required: 'Password confirmation is required!',
                            validate: (value) => value === passwordValue || 'Passwords do not match!',
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="signup-confirm-password"
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                autoComplete="new-password"
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message || 'Pasting is disabled for this field.'}
                                onPaste={handlePaste}
                                slotProps={{
                                    htmlInput: {
                                        'aria-required': true,
                                        'aria-invalid': !!errors.confirmPassword,
                                    },
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="termsAndPoliciesAccepted"
                        control={control}
                        rules={{
                            required: 'Terms and Conditions should be accepted!',
                        }}
                        render={({ field }) => (
                            <FormControl
                                error={!!errors.termsAndPoliciesAccepted}
                                component="fieldset"
                                variant="standard"
                                fullWidth
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={!!field.value}
                                            disabled={!hasReadBoth}
                                            onBlur={field.onBlur}
                                            onChange={(_, checked) => field.onChange(checked)}
                                            inputRef={field.ref}
                                            name={field.name}
                                            slotProps={{
                                                input: {
                                                    'aria-required': true,
                                                    'aria-invalid': !!errors.termsAndPoliciesAccepted,
                                                    'aria-describedby': termsHintId,
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" component="span">
                                            I have read and agree to the{' '}
                                            <Button
                                                type="button"
                                                size="small"
                                                onClick={(event) => openTermsAndPoliciesModal(event, 'terms')}
                                            >
                                                Terms of Service
                                            </Button>
                                            {' '}and{' '}
                                            <Button
                                                type="button"
                                                size="small"
                                                onClick={(event) => openTermsAndPoliciesModal(event, 'policies')}
                                            >
                                                Privacy Policy
                                            </Button>
                                            .
                                        </Typography>
                                    }
                                />
                                <FormHelperText id={termsHintId}>
                                    {!hasReadBoth
                                        ? 'Open and review the Terms of Service and Privacy Policy to enable this checkbox.'
                                        : errors.termsAndPoliciesAccepted?.message}
                                </FormHelperText>
                            </FormControl>
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        disabled={!isValid}
                        aria-disabled={!isValid}
                    >
                        Sign Up
                    </Button>

                    <Typography component="p" className={styles.helperSignIn}>
                        Already have an Account?{' '}
                        <Link
                            component={RouterLink}
                            to={RoutePaths.AUTH.SIGN_IN}
                            underline="always"
                        >
                            Sign in.
                        </Link>
                    </Typography>
                </Box>
            </Box>

            <DocViewerModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}

export default SignupPage;
