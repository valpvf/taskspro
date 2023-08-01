import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';

const TitleSchema = Yup.object().shape({
  columnTitle: Yup.string().required('Title is required'),
});

const ModalColumn = ({ onClose, title, btnName }) => {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>{title}</ModalTitle>

      <Formik
        initialValues={{
          columnTitle: '',
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="columnTitle"></label>
            <InputField
              as={Field}
              text="Title"
              id="columnTitle"
              name="columnTitle"
              type="text"
              onChange={handleChange}
              value={values.columnTitle}
            />
            <InputErrorMessage name="columnTitle" component={'p'} />
            <ButtonMain>
              <BlackPlusButton />
              {btnName}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalColumn;