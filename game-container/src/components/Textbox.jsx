export const Textbox = ({
    value = "", 
    onChange = () => {},
    placeholder = "",
    width = "300px",
    height = "40px",
    border = "2px solid #522f0b",
    backgroundColor = "#f0e0c2",
}) => {
    return (
        <textarea
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
            width:width,
            height:height,
            border:border,
            backgroundColor:backgroundColor
        }}
        />
    );
};
