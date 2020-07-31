import React from 'react';

const useStyles = (theme) => ({
  root: {
    display: 'flex'
  },
  wrapper: {
    width: '100%',
    paddingTop: '20px'
  },
  info: {
    textAlign: 'center',
    backgroundColor: 'rgb(75, 0, 86)',
    color: 'white',
    paddingTop: '50px',
    paddingBottom: '13px'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-55px'
  },
  img: {
    width: '150px',
    height: '150px',
    border: `4px solid ${theme.value.contrast}`,
    borderRadius: '50%'
  }
});

const Circular = ({
  theme,
  name,
  designation,
  imageUrl
}) => {
  const styles = useStyles(theme);
  return (
    <div style={styles.root}>
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img src={imageUrl.value} style={styles.img} />
        </div>
        <div
          style={{
            ...styles.info,
            backgroundColor: theme.value.color,
            color: theme.value.contrast
          }}
        >
          <h2>{name.value}</h2>
          <h2>{designation.value}</h2>
        </div>
      </div>
    </div>
  );
};

export default Circular;
