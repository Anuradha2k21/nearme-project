import Select, { components } from "react-select";
import { SlArrowDown } from "react-icons/sl";
import styles from "./Navbar.module.css";

const options = [
  { value: "home", label: "Home" },
  { value: "contact", label: "Contact" },
  { value: "about", label: "About" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: state.isFocused ? "none" : "none",
    color: "white",
    fontSize: "1rem",
    fontWeight: "300",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    width: "auto",
    minWidth: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#A4A4A3" : "#F4F4F4",
    color: "black",
    fontSize: "1rem",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "gray",
    },
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SlArrowDown color="white" />
    </components.DropdownIndicator>
  );
};

const NavSelector = () => {
  return (
    <Select
      styles={customStyles}
      components={{ DropdownIndicator }}
      options={options}
      placeholder="Select an option"
      isClearable={false}
      defaultValue={options[0]}
    />
  );
};

export default NavSelector;
