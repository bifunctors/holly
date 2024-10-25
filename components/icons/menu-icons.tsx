import * as React from "react";

import { IconSvgProps } from "@/types";

export const HouseFull: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H8V15c0-1.105,.895-2,2-2h4c1.105,0,2,.895,2,2v9h8V10.043c0-.929-.42-1.791-1.151-2.363Z"
      />
    </svg>
  );
};

export const HouseOutline: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H9V15c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v9h9V10.043c0-.929-.42-1.791-1.151-2.363Zm-.849,14.32h-5v-7c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7H2V10.043c0-.31,.14-.597,.384-.788L11.384,2.212c.363-.284,.869-.284,1.232,0l9,7.043c.244,.191,.384,.478,.384,.788v11.957Z"
      />
    </svg>
  );
};

export const CameraFull: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="M17.721,3,16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L6.279,3Z"
      />
      <circle
        clipRule="evenodd"
        fill="white"
        cx="12" cy="14" r="4"
      />
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="M19,5H5a5.006,5.006,0,0,0-5,5v9a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10A5.006,5.006,0,0,0,19,5ZM12,20a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,20Z"
      />
    </svg>
  );
};

export const CameraOutline: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"
      />
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"
      />
    </svg>
  );
}

export const StarFull: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="m12.939,23.371c-.345.839-1.533.839-1.878,0l-2.89-7.542L.629,12.939c-.839-.345-.839-1.533,0-1.878l7.542-2.89L11.061.629c.345-.839,1.533-.839,1.878,0l2.89,7.542,7.542,2.89c.839.345.839,1.533,0,1.878l-7.542,2.89-2.89,7.542ZM4.778,7.405l1.861-.766.77-1.871-3.922-2.602c-.866-.572-1.894.455-1.322,1.322l2.612,3.917Zm12.583-.766l1.861.766,2.612-3.917c.572-.866-.456-1.894-1.322-1.322l-3.922,2.602.77,1.871Zm1.867,9.954l-1.867.769-.766,1.861,3.918,2.6c.866.572,1.894-.455,1.322-1.322l-2.606-3.907Zm-12.59.769l-1.867-.769-2.606,3.907c-.572.866.456,1.894,1.322,1.322l3.918-2.6-.766-1.861Z"
      />
    </svg>
  );
};

export const StarOutline: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        fill="white"
        fillRule="evenodd"
        d="m22.986,10.487l-4.566-1.88,3.414-5.12c.572-.866-.456-1.894-1.322-1.322l-5.125,3.401-1.874-4.554c-.254-.615-.849-1.013-1.514-1.013s-1.26.397-1.514,1.013l-1.874,4.553L3.487,2.165c-.866-.572-1.894.455-1.322,1.322l3.414,5.12-4.565,1.88c-.616.253-1.015.847-1.015,1.513s.398,1.26,1.014,1.513l4.559,1.877-3.407,5.11c-.572.866.456,1.894,1.322,1.322l5.121-3.398,1.878,4.564c.254.615.849,1.013,1.514,1.013s1.26-.397,1.514-1.013l1.878-4.563,5.121,3.398c.866.572,1.894-.455,1.322-1.322l-3.407-5.11,4.558-1.877c.616-.253,1.015-.847,1.015-1.513s-.398-1.26-1.014-1.513Zm-7.857,4.099c-.246.102-.442.297-.544.544l-2.585,6.28-2.585-6.28c-.102-.247-.298-.442-.544-.544l-6.279-2.585,6.279-2.585c.246-.102.442-.297.544-.544l2.585-6.28,2.585,6.28c.102.247.298.442.544.544l6.279,2.585-6.279,2.585Z"
      />
    </svg>
  );
};

export const Settings: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g>
        <path
          clipRule="evenodd"
          fill="white"
          fillRule="evenodd"
          d="M10.931,2.75a3.728,3.728,0,0,0-7.195,0H0v2H3.736a3.728,3.728,0,0,0,7.195,0H24v-2ZM7.333,5.5a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,5.5Z"
        />
        <path
          clipRule="evenodd"
          fill="white"
          fillRule="evenodd"
          d="M16.667,8.25A3.745,3.745,0,0,0,13.07,11H0v2H13.07a3.727,3.727,0,0,0,7.194,0H24V11H20.264A3.745,3.745,0,0,0,16.667,8.25Zm0,5.5A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"
        />
        <path
          clipRule="evenodd"
          fill="white"
          fillRule="evenodd"
          d="M7.333,16.5a3.745,3.745,0,0,0-3.6,2.75H0v2H3.736a3.728,3.728,0,0,0,7.195,0H24v-2H10.931A3.745,3.745,0,0,0,7.333,16.5Zm0,5.5a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"
        />
      </g>
    </svg>
  );
};
