import styled from "styled-components";

const Div = styled.div`
  margin-left: 32px;
`;

const Card = styled.div`
  padding: 16px;
  background: #fff;
  width: 274px;
  color: #0072b4;
  border-radius: 5px;
`;

export default function Main() {
  return (
    <Div>
      <h5 style={{ color: "#7E8198" }}>My RFQs</h5>
      <div className="row gx-2 gy-3 mt-2" style={{ width: "85%" }}>
        <div className="col-5">
          <Card>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                marginBottom: "0"
              }}
            >
              Draft
            </p>
            <p
              style={{
                fontSize: "3.5rem",
                marginBottom: "0",
                fontWeight: "700"
              }}
            >
              11
            </p>
          </Card>
        </div>
        <div className="col-5">
          <Card>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                marginBottom: "0"
              }}
            >
              Published
            </p>
            <p
              style={{
                fontSize: "3.5rem",
                marginBottom: "0",
                fontWeight: "700"
              }}
            >
              112
            </p>
          </Card>
        </div>
        <div className="col-5">
          <Card>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                marginBottom: "0"
              }}
            >
              Closed
            </p>
            <p
              style={{
                fontSize: "3.5rem",
                marginBottom: "0",
                fontWeight: "700"
              }}
            >
              01
            </p>
          </Card>
        </div>
      </div>
    </Div>
  );
}
