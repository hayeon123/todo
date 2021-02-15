import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  LabelsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(0, 1.25),
  },
  LabelsWrapper: {
    padding: theme.spacing(0.36, 0.5),
  },
  label: {
    ...theme.custom.fontFamily.metropolis,
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.text.primary,
    backgroundColor: theme.custom.palette.labelBackground,
  },
}));

const Labels = ({ labels = [] }) => {
  const classes = useStyles();
  return (
    <div className={classes.LabelsWrapper}>
      {labels.map((labelItem) => (
        <div key={labelItem.id} className={classes.labelWrapper}>
          <Chip
            label={labelItem.name}
            size="small"
            classes={{ root: classes.label }}
          />
        </div>
      ))}
    </div>
  );
};

export default Labels;
