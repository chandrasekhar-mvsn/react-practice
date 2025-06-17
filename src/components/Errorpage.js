import { useRouteError } from "react-router";
const Errorpage = () => {
const error = useRouteError();
return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(135deg, #f85032 0%, #e73827 100%)",
        background: "linear-gradient(135deg, rgb(0, 51, 160) 0%,rgb(0, 32, 91) 100%)",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif"
    }}>
        <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "40px 60px",
            borderRadius: "16px",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            textAlign: "center"
        }}>
            <h1 style={{
                fontSize: "5rem",
                margin: "0 0 16px 0",
                fontWeight: "bold",
                letterSpacing: "2px"
            }}>{error.status}</h1>
            <h2 style={{
                fontSize: "2rem",
                margin: "0 0 12px 0"
            }}>{error.statusText}</h2>
            <p style={{
                fontSize: "1.2rem",
                marginBottom: "24px"
            }}>
                {error.data}
            </p>
            <a href="/" style={{
                display: "inline-block",
                padding: "10px 28px",
                background: "#fff",
                // color: "#e73827",
                color: "#00205b",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "background 0.2s, color 0.2s"
            }}>Go Home</a>
        </div>
    </div>
);
}
export default Errorpage;