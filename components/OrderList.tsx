import * as React from "react";
import { List, MD3Colors } from "react-native-paper";
import ListItem from "./ListItem";

const OrderList = ({ heading }: { heading?: string }) => (
  <List.Section>
    <List.Subheader>{heading || "Some title"}</List.Subheader>
    {[
      { name: "Goku Son", icon: "account-circle" },
      { name: "Gohan Son", icon: "account-circle" },
      { name: "Vegeta", icon: "account-circle" },
      { name: "Trunks", icon: "account-circle" },
      { name: "Goten", icon: "account-circle" },
      { name: "Angel Whis", icon: "account-circle" },
      { name: "Lord Beerus", icon: "account-circle" },
      { name: "Bulma", icon: "account-circle" },
      { name: "Naruto Uzumaki", icon: "account-circle" },
      { name: "Light Yagami", icon: "account-circle" },
      { name: "Iren Yager", icon: "account-circle" },
    ]?.map((listData) => (
      <ListItem name={listData.name} icon={listData.icon} />
    ))}
  </List.Section>
);

export default OrderList;
