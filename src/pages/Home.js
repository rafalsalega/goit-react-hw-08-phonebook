const styles = {
    container: {
      minHeight: 'calc(100vh - 500px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
        Hello!
        <br />
        Welcome to your Phonebook{' '}
        </h1>
      </div>
    );
  }