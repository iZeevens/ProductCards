import { Typography } from "@mui/material";

interface IDetailViewProps {
  image: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  originName: string;
  locationName: string;
}

const DetailView = ({
  name,
  species,
  status,
  gender,
  originName,
  locationName,
}: IDetailViewProps) => {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        {name}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginBottom: 2 }}
      >
        {species} - {status}
      </Typography>
      <Typography variant="body2" color="text.primary" sx={{ marginBottom: 2 }}>
        <strong>Gender:</strong> {gender}
      </Typography>
      <Typography variant="body2" color="text.primary" sx={{ marginBottom: 2 }}>
        <strong>Origin:</strong> {originName}
      </Typography>
      <Typography variant="body2" color="text.primary" sx={{ marginBottom: 2 }}>
        <strong>Location:</strong> {locationName}
      </Typography>
    </>
  );
};

export default DetailView;
