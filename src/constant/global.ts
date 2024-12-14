export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((month) => ({
  value: month,
  label: month,
}));

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};

export const genders = ["male", "female", "other"];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodGroupOptions = bloodGroups.map((bloodGroup) => ({
  value: bloodGroup,
  label: bloodGroup,
}));

export const gendersOptions = genders.map((gender) => ({
  value: gender,
  label: gender,
}));
