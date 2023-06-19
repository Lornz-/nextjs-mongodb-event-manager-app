// vendors
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

// utils
import { ErrorMessages, ValidateProps } from '@/config/constants';
import { isDateValid } from '@/utils/date';
import * as normalize from '@/utils/normalize';

// components
import Stack from '../LayoutSections/Stack';
import TextInputField from '../TextInputField';
import TextAreaField from '../TextAreaField';
import Switcher from '../LayoutSections/Switcher';
import Button from '../Button';
import { useModal } from '../Modal/Modal.context';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(ErrorMessages.event.name.required)
    .min(ValidateProps.event.name.minLength, ErrorMessages.event.name.min)
    .max(ValidateProps.event.name.maxLength, ErrorMessages.event.name.max),
  description: Yup.string()
    .required(ErrorMessages.event.description.required)
    .min(
      ValidateProps.event.description.minLength,
      ErrorMessages.event.description.min
    )
    .max(
      ValidateProps.event.description.maxLength,
      ErrorMessages.event.description.max
    ),
  startDate: Yup.date()
    .required(ErrorMessages.event.startDate.required)
    .min(new Date(), ErrorMessages.event.startDate.min),
  endDate: Yup.date()
    .required(ErrorMessages.event.endDate.required)
    .test(
      'dates_test',
      ErrorMessages.event.endDate.greaterThan,
      function (value) {
        const { startDate } = this.parent;
        return isDateValid(startDate) && value.getTime() > startDate.getTime();
      }
    ),
});

const initialValues = {
  name: '',
  description: '',
  startDate: '',
  endDate: '',
};

const EventForm = ({ onSubmit }) => {
  const { close } = useModal();
  const router = useRouter();

  const handleSubmit = useCallback(
    async (values, actions) => {
      actions.setSubmitting(true);

      const event = normalize.event(values);

      try {
        await onSubmit(event);

        toast.success('Event created successfully', { duration: 2000 });

        setTimeout(() => router.reload(), 2000);

        close();
      } catch (error) {
        toast.error(error);
      } finally {
        actions.setSubmitting(false);
      }
    },
    [close, onSubmit, router]
  );
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit: formikHandleSubmit,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={formikHandleSubmit}>
            <Stack space="2rem">
              <TextInputField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                helperText={touched.name ? errors.name : ''}
              />
              <TextAreaField
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.description && touched.description}
                helperText={touched.description ? errors.description : ''}
                css={`
                  height: 100%;
                  min-height: 144px;

                  textarea {
                    flex-grow: 1;
                    resize: none;
                  }
                `}
              />

              <Switcher threshold="120px" space="1rem" limit={2}>
                <div>
                  <div>
                    <TextInputField
                      type="datetime-local"
                      label="Begins"
                      name="startDate"
                      value={values.startDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.startDate && touched.startDate}
                      helperText={touched.startDate ? errors.startDate : ''}
                    />
                  </div>
                  <div>
                    <TextInputField
                      type="datetime-local"
                      label="Ends"
                      name="endDate"
                      value={values.endDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.endDate && touched.endDate}
                      helperText={touched.endDate ? errors.endDate : ''}
                    />
                  </div>
                </div>
              </Switcher>

              <Button
                type="submit"
                css={`
                  width: 100%;
                `}
              >
                Confirm
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </>
  );
};

EventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EventForm;
