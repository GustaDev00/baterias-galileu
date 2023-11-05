import styled, { css } from "styled-components";

import CustomBrProps from "./props";
import { mediaMaxWidth, mediaMinWidth } from "../media-query";

export const Br = styled.br<CustomBrProps>`
  display: none;

  ${({ byViewport, byMediaquery }) => {
    if (byMediaquery) {
      return css`
        @media (min-width: ${byMediaquery}) {
          display: initial;
        }
      `;
    } else if (byViewport === "desktop") {
      return css`
        ${mediaMinWidth("mobile", 1)`
          display: initial;
        `}
      `;
    } else if (byViewport === "mobile") {
      return css`
        ${mediaMaxWidth("mobile")`
          display: initial;
        `}
      `;
    }
    return css`
      display: none;
    `;
  }}
`;
