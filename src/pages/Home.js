const styles = {
    container: {
      minHeight: 'calc(60vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
    picture: {
    
      marginTop: 25,
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook welcome page{' '}
          <img
            style={styles.picture}
            src="https://i.ibb.co/GdFyt3H/phone-book-1112.png"
            alt="phonebook"
          />
        </h1>
      </div>
    );
  }