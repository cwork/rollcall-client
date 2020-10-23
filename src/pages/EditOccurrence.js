import React from 'react';
import Main from '../components/page/MainContent';
import PageContainer from '../components/page/PageContainer';
import EditOccurrenceForm from '../components/occurrences/EditOccurrenceForm';

const EditOccurrence = () => {
  return (
    <PageContainer>
      <Main title="Edit Occurrence">
        <EditOccurrenceForm />
      </Main>
    </PageContainer>
  );
};

export default EditOccurrence;
