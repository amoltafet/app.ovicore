import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <SuiBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })}>
            star
          </Icon>
        </SuiBox>
        <SuiBox lineHeight={1}>
          <SuiTypography variant="h6" color="white">
            Need help?
          </SuiTypography>
          <SuiBox mb={1.825} mt={-1}>
            <SuiTypography variant="caption" color="white" fontWeight="medium">
              Please contact us
            </SuiTypography>
          </SuiBox>
          <SuiButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="white"
            fullWidth
          >
            contact us
          </SuiButton>
        </SuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
