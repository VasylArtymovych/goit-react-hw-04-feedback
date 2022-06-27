import styled from "@emotion/styled";

export const FeedBackButton = styled.button`
    width: calc(100%/3 - 10px);
    height: 25px;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 50px;
    color: #fff;
    background: linear-gradient(to bottom right, rgb(54, 8, 109), rgb(78, 54, 101));
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 15px;
    };

    &:hover {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        box-shadow: 0px 0px 20px #fff;
    };
`;