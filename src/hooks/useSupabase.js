import { supabaseClient } from '../App';

const useSupabase = () => {
  const send = async (response) => {
    const { data, error } = await supabaseClient.from('guests').insert(response).select();
  };

  return { send };
};

export default useSupabase;
