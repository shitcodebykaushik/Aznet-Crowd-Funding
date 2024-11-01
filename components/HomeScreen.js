// components/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  
  // State to store dynamic greeting
  const [greeting, setGreeting] = useState('');
  
  // State to simulate unread notifications count
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  // Sample data for past donations
  const pastDonations = [
    { id: 1, item: 'Winter Jacket', date: '2023-10-15', imageUri: 'https://example.com/jacket.png' },
    { id: 2, item: 'Textbooks', date: '2023-09-22', imageUri: 'https://example.com/textbooks.png' },
    { id: 3, item: 'Laptop', date: '2023-08-10', imageUri: 'https://example.com/laptop.png' },
  ];

  // Update greeting based on the time of day
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const themeStyles = {
    safeArea: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#333',
    },
    notificationIconContainer: {
      position: 'relative',
    },
    notificationIcon: {
      fontSize: 24,
      color: isDarkMode ? '#fff' : '#333',
    },
    notificationBadge: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: '#FF3D00',
      borderRadius: 8,
      paddingHorizontal: 5,
      paddingVertical: 2,
    },
    notificationBadgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    subheading: {
      fontSize: 16,
      color: isDarkMode ? '#ccc' : '#333',
      marginBottom: 15,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : '#f1f1f1',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderColor: isDarkMode ? '#555' : '#ccc',
      borderWidth: 1,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#333',
    },
    campaignBanner: {
      backgroundColor: isDarkMode ? '#333' : '#e0f7fa',
      borderRadius: 10,
      padding: 20,
      marginVertical: 20,
    },
    bannerText: {
      fontSize: 18,
      fontWeight: '600',
      color: isDarkMode ? '#fff' : '#333',
    },
    startCampaignButton: {
      marginTop: 10,
      backgroundColor: isDarkMode ? '#388E3C' : '#4CAF50',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    startCampaignText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: isDarkMode ? '#fff' : '#333',
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    categoryIconContainer: {
      alignItems: 'center',
    },
    categoryIcon: {
      width: 60,
      height: 60,
      backgroundColor: isDarkMode ? '#555' : '#e1f5fe',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    categoryLabel: {
      marginTop: 5,
      fontSize: 14,
      color: isDarkMode ? '#ccc' : '#333',
    },
    donationCard: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 5 },
    },
    donationImage: {
      width: 50,
      height: 50,
      borderRadius: 10,
      marginRight: 15,
    },
    donationTextContainer: {
      flex: 1,
    },
    donationItemName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#333',
    },
    donationDate: {
      fontSize: 14,
      color: isDarkMode ? '#ccc' : '#777',
    },
  };

  return (
    <SafeAreaView style={themeStyles.safeArea}>
      <ScrollView style={themeStyles.container}>
        <View style={themeStyles.header}>
          <Text style={themeStyles.greeting}>{greeting}, Lisa 👋</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity 
              style={themeStyles.notificationIconContainer} 
              onPress={() => navigation.navigate('Notifications')} // Navigate to Notifications screen
            >
              <Icon name="notifications-outline" style={themeStyles.notificationIcon} />
              {unreadNotifications > 0 && (
                <View style={themeStyles.notificationBadge}>
                  <Text style={themeStyles.notificationBadgeText}>{unreadNotifications}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://example.com/profile-pic.png' }}
                style={themeStyles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={themeStyles.subheading}>What do you wanna donate today?</Text>

        <View style={themeStyles.searchContainer}>
          <Icon name="search-outline" size={20} color={isDarkMode ? '#ccc' : '#888'} />
          <TextInput placeholder="Search here" placeholderTextColor={isDarkMode ? '#888' : '#ccc'} style={themeStyles.searchInput} />
          <Icon name="options-outline" size={20} color={isDarkMode ? '#ccc' : '#888'} />
        </View>

        <View style={themeStyles.campaignBanner}>
          <Text style={themeStyles.bannerText}>Do you really have a creative idea?</Text>
          <TouchableOpacity style={themeStyles.startCampaignButton}>
            <Text style={themeStyles.startCampaignText}>Start Campaign</Text>
          </TouchableOpacity>
        </View>

        <Text style={themeStyles.sectionTitle}>Categories</Text>
        <View style={themeStyles.categoryContainer}>
          <CategoryIcon icon="apps-outline" label="All" onPress={() => {}} themeStyles={themeStyles} />
          <CategoryIcon
            icon="megaphone-outline"
            label="Campaign"
            onPress={() => navigation.navigate('Campaign')}
            themeStyles={themeStyles}
          />
          <CategoryIcon
            icon="gift-outline"
            label="Donate Goods"
            onPress={() => navigation.navigate('DonateGoods')}
            themeStyles={themeStyles}
          />
          <CategoryIcon icon="heart-outline" label="Charity" onPress={() => {}} themeStyles={themeStyles} />
        </View>

        <Text style={themeStyles.sectionTitle}>Past Donations</Text>
        {pastDonations.map(donation => (
          <View key={donation.id} style={themeStyles.donationCard}>
            <Image source={{ uri: donation.imageUri }} style={themeStyles.donationImage} />
            <View style={themeStyles.donationTextContainer}>
              <Text style={themeStyles.donationItemName}>{donation.item}</Text>
              <Text style={themeStyles.donationDate}>{donation.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const CategoryIcon = ({ icon, label, onPress, themeStyles }) => (
  <View style={themeStyles.categoryIconContainer}>
    <TouchableOpacity style={themeStyles.categoryIcon} onPress={onPress}>
      <Icon name={icon} size={28} color="#039BE5" />
    </TouchableOpacity>
    <Text style={themeStyles.categoryLabel}>{label}</Text>
  </View>
);

export default HomeScreen;
