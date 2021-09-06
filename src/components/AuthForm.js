import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Input, Text, Button, Spinner } from '@ui-kitten/components';
import Spacer from '../components/Spacer';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';


const AuthForm = ({ formType }) => {

   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [passwordRepeat, setPasswordRepeat] = React.useState('');

   const [secureTextEntry, setSecureTextEntry] = React.useState(true);

   const [authType, setAuthType] = React.useState(formType);
   const navigation = useNavigation();

   React.useEffect(() => {
      console.log(isBtnLoading)
   }, [])

   const { goWithoutSignIn, signIn, signUp, isBtnLoading } = React.useContext(AuthContext)
   const LoadingIndicator = (props) => (
      <View >
         <Spinner size='small' />
      </View>
   );
   const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
   };

   const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
         <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={16} color="black" />
      </TouchableWithoutFeedback>
   );

   return (
      <View style={styles.container}>
         <Text category='h2' style={{ textAlign: 'center', marginVertical: 60 }}>{authType}</Text>
         <Input
            size='large'
            status='basic'
            placeholder='Email'
            value={email}
            onChangeText={nextValue => setEmail(nextValue)}
         />
         <Spacer vertical={5} />

         <Input
            size='large'
            value={password}
            placeholder='Password'
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
         />
         {authType == 'Sign Up' ? (
            <>
               <Spacer vertical={5} />
               <Input
                  size='large'
                  value={passwordRepeat}
                  placeholder='Repeat Password'
                  accessoryRight={renderIcon}
                  secureTextEntry={secureTextEntry}
                  onChangeText={nextValue => setPasswordRepeat(nextValue)}
               />
            </>
         ) : (null)}

         <Spacer vertical={15} />

         {authType == 'Sign In' ? (
            <Button disabled={email == '' || password == ''} status="primary" onPress={() => signIn({ email, password })}>Sign In</Button>
         ) : (
            <Button disabled={email == '' || password == ''} status="primary" onPress={() => signUp()}>Sign Up</Button>

         )}


         <Spacer vertical={2} />

         {authType == 'Sign In' ? (
            <Button
               appearance='ghost'
               onPress={() => navigation.push('SignUp')}
            >
               Don't have an account? Sign Up
            </Button>
         ) : (
            <Button
               appearance='ghost'
               onPress={() => navigation.push('SignIn')}
            >
               Already have an account? Sign In
            </Button>
         )}
         {authType == 'Sign In' ? (
            <Button
               appearance='ghost'
               onPress={() => goWithoutSignIn()}
            >Go without Sign In</Button>
         ) : (null)}

      </View>
   )
}

export default AuthForm

const styles = StyleSheet.create({
   container: {
      padding: 40,
      marginTop: 10
   }
})