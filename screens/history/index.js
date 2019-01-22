import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

const pastPerformace = [
  {
    date: "Yesterday",
    item1: "0",
    item2: "0-0",
    item3: "0.0u"
  },
  {
    date: "Last 7 days",
    item1: "0",
    item2: "0-0",
    item3: "0.0u"
  },
  {
    date: "Last 30 days",
    item1: "0",
    item2: "0-0",
    item3: "0.0u"
  },
  {
    date: "All Time",
    item1: "102",
    item2: "51-45-6",
    item3: "+3.21u"
  }
];
const topLeagues = [
  {
    name: "NCAAB",
    item1: "4",
    item2: "3-1",
    item3: "+1.73u"
  },
  {
    name: "NCAAF",
    item1: "91",
    item2: "44-41-6",
    item3: "+0.55u"
  },
  {
    name: "NFL",
    item1: "7",
    item2: "4-3",
    item3: "+0.64u"
  },
  {
    name: "LEA1",
    item1: "120",
    item2: "42-15",
    item3: "0.0u"
  },
  {
    name: "LEA2",
    item1: "10",
    item2: "2-5",
    item3: "0.0u"
  },
  {
    name: "LEA3",
    item1: "20",
    item2: "4-1",
    item3: "0.0u"
  }
];
export default class History extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerItem}>
              <Text style={styles.statisticsText}>102</Text>
              <Caption>Bets Tracked</Caption>
            </View>
            <View style={styles.headerItem}>
              <Text style={styles.statisticsText}>0</Text>
              <Caption>Following</Caption>
            </View>
            <View style={styles.headerItem}>
              <Text style={styles.statisticsText}>3,658</Text>
              <Caption>Followers</Caption>
            </View>
          </View>

          <Button  onPress={()=>{}} mode="contained" style={styles.followBtn} icon="add">
            FOLLOW
          </Button>
          <View style={styles.historyDetailContainer}>
            <Text style={styles.detialTitle}>Past Performace</Text>
            {pastPerformace.map((item, index) => {
              return (
                <View key={index} style={styles.detailContainer}>
                  <View style={styles.detailDate}>
                    <Text>{item.date}</Text>
                  </View>
                  <View style={styles.detailNumberContainer}>
                    <View style={styles.numberContainer}>
                      <Text style={styles.number}>{item.item1}</Text>
                    </View>
                    <View style={styles.numberContainer}>
                      <Text style={styles.number}>{item.item2}</Text>
                    </View>
                    <View style={styles.numberContainer}>
                      <Text
                        style={[
                          styles.number,
                          item.item3 == "0.0u"
                            ? styles.disableText
                            : styles.activeText
                        ]}
                      >
                        {item.item3}
                      </Text>
                    </View>
                    <View style={styles.iconContainer}>
                      {item.item3 == "0.0u" ? null : (
                        <Icon
                          style={styles.nextIcon}
                          name="navigate-next"
                          size={20}
                          color="grey"
                        />
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.historyDetailContainer}>
            <Text style={styles.detialTitle}>Top Leagues</Text>
            {topLeagues.map((item, index) => {
              return (
                <View key={index} style={styles.detailContainer}>
                  <View style={styles.detailDate}>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.detailNumberContainer}>
                    <View style={styles.numberContainer}>
                      <Text style={styles.number}>{item.item1}</Text>
                    </View>
                    <View style={styles.numberContainer}>
                      <Text style={styles.number}>{item.item2}</Text>
                    </View>
                    <View style={styles.numberContainer}>
                      <Text
                        style={[
                          styles.number,
                          item.item3 == "0.0u"
                            ? styles.disableText
                            : styles.activeText
                        ]}
                      >
                        {item.item3}
                      </Text>
                    </View>
                    <View style={styles.iconContainer}>
                      {item.item3 == "0.0u" ? null : (
                        <Icon
                          style={styles.nextIcon}
                          name="navigate-next"
                          size={20}
                          color="grey"
                        />
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
