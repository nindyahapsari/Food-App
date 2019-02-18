import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponents';





const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
  }

class Menu extends Component {


 
    static naviagtionOptions = {
        title: 'Menu'
    };

    
    render() {

        const { navigate } = this.props.navigation;


        const renderMenuItem = ({item, index}) => {
            return (
                        <Tile
                            // key={index}
                            // title={item.name}
                            // caption={item.description}
                            // featured
                            // onPress={() => navigate('Dishdetail', { dishId: item.id })}
                            imageSrc={{ uri: baseUrl + item.image}}
                            />
            );
        }

        return (
            <FlatList 
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                // keyExtractor={item => item.id.toString()}
                />
                );
        


        // if (this.props.dishes.isLoading) {
        //     return(
        //         <Loading />
        //     );
        // }
        // else if (this.props.dishes.errMess) {
        //     return(
        //         <View>            
        //             <Text>{this.props.dishes.errMess}</Text>
        //         </View>            
        //     );
        // }
        // else {}
            
            
        

    } 
}


export default connect(mapStateToProps)(Menu);



