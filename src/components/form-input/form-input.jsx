import { InputLabel, Input, Group } from './form-input.style';

const FormInput = ({ label, ...options }) => {
  return (
    <Group>
      <Input {...options} />
      {label && (
        <InputLabel shrink={options.value.length}>{label}</InputLabel>
      )}
    </Group>
  );
}

export default FormInput;
