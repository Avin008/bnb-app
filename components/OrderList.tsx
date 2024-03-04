import * as React from "react";
import { List, MD3Colors } from "react-native-paper";
import ListItem from "./ListItem";

const dummyData = [
  { name: "Raghav Chaitanya", icon: "account-circle" },
  { name: "Mahesh Dalia", icon: "account-circle" },
  { name: "Deepesh Joshi", icon: "account-circle" },
  { name: "Anand Mehra", icon: "account-circle" },
  { name: "Jogesh Khan", icon: "account-circle" },
  { name: "Mousumi Mishra", icon: "account-circle" },
  { name: "Neha Patel", icon: "account-circle" },
  { name: "Rahesh Agrawal", icon: "account-circle" },
  { name: "Ritesh Nag", icon: "account-circle" },
];

const OrderList = ({ heading }: { heading?: string }) => {
  return (
    <List.Section>
      <List.Subheader>{heading || "Some title"}</List.Subheader>
      {dummyData?.map((listData, index) => (
        <ListItem name={listData.name} icon={listData.icon} key={index} />
      ))}
    </List.Section>
  );
};

export { OrderList, dummyData };
