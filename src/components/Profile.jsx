import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  width: 286px;
  border-radius: 12px;
  padding: 18px;
`;

export default function Profile() {
  return (
    <Card>
      <h5 style={{ textAlign: "center", marginBottom: "24px" }}>
        Expert Machine Shop
      </h5>

      <div
        className="row"
        style={{
          background: "#FCE0E3",
          padding: "16px 8px",
          margin: "0",
          borderRadius: "5px"
        }}
      >
        <div className="col-2">
          <i
            className="fas fa-exclamation-circle"
            style={{ color: "#ED2D42" }}
          ></i>
        </div>
        <div className="col-10">
          <p style={{ fontWeight: "500", fontSize: "13px", color: "#ED2D42" }}>
            Your Profile is not complete
          </p>
          <p style={{ fontSize: "12px", marginBottom: "0" }}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </p>
        </div>
      </div>
      <div
        className="row gx-4 gy-3"
        style={{ fontSize: "12px", margin: "12px 0px", fontWeight: "500" }}
      >
        <div className="col-6">Basic Details</div>
        <div className="col-6">Upload Logo</div>
        <div className="col-6">Add Description</div>
        <div className="col-6">Profile Picture</div>
      </div>
      <div className="text-center mt-4">
        <button
          className="btn text-center btn-lg btn-primary"
          style={{ width: "100%", fontSize: "16px" }}
        >
          Complete Your Profile
        </button>
      </div>
    </Card>
  );
}
