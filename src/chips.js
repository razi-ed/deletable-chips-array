import React, { PureComponent } from "react";
import { withStyles, Chip, Paper, Typography } from "material-ui";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2,
    minHeight: 40
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});
/**
 * `ChipsArray` renders an Array of Deletable chips
 * & takes following props:
 *
 * `Data`,
 * `onDelete()` :
 #    handleDelete = deleteThis => () => {
 #   const data = [...this.state.data].filter(ele => ele !== deleteThis);
 #   this.setState({ data });
 #   };
 *`dataEmptyMsg`: Msg to be shown when data is empty
 * 
 * - Razi
 */
class ChipsArray extends PureComponent {
  render() {
    const { classes, data, onDelete, dataEmptyMsg } = this.props;

    return (
      <Paper className={classes.root}>
        {data.length > 0 ? (
          data.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                onDelete={onDelete(data)}
                className={classes.chip}
              />
            );
          })
        ) : (
          <Typography
            color="primary"
            variant="subheading"
            align="center"
            style={{ paddingTop: ".52rem" }}
          >
            {`${dataEmptyMsg}`}
          </Typography>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(ChipsArray);
