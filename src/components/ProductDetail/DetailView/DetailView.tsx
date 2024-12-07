import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import BackButton from "../../ui/BackButton/BackButton";

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
  image,
  name,
  species,
  status,
  gender,
  originName,
  locationName,
}: IDetailViewProps) => {
  return (
    <>
      <Card
        sx={{ maxWidth: 500, width: "100%", borderRadius: 2, boxShadow: 3 }}
      >
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={name}
          sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
        />
        <CardContent>
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
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Gender:</strong> {gender}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Origin:</strong> {originName}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Location:</strong> {locationName}
          </Typography>
          <BackButton />
        </CardContent>
      </Card>
    </>
  );
};

export default DetailView;
