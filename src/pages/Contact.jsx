import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/actions';
import { Loader } from 'components/Loader/Loader';
import { Helmet } from 'react-helmet';

export default function App () {
 const loading = useSelector(state => state.contacts.isLoading);   
 const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  return (
    <>
      <Helmet>
        <h1>Phonebook</h1>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading ? <Loader /> : <ContactList />}
    </>
  );
}