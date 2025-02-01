export default function customText({text, tcolor}) {
    const text = props?.text ?? "default test";
    return (
        <b> style={{color: tcolor, backgroundColor: `blue`}} </b>
    );
}