export default [
  {
    selector: "node",
    style: {
      "width": "50",
      "height": "50",
      "font-size": "18",
      "font-weight": "bold",
      "text-valign": "center",
      "content": `data(id)`,
      "text-wrap": "wrap",
      "text-max-width": "140",
      "background-color": ele => ele.data("label") === "person" ? "#7E8DC9" : "#E89F63",
      "border-color": ele => ele.data("label") === "person" ? "#2147E0" : "#D66D17",
      "border-width": "3",
      "color": "white"
    }
  },
  {
    selector: "node:selected",
    style: {
      "background-color": ele => ele.data("label") === "person" ? "#546ED3" : "#87664B",
      "border-color": ele => ele.data("label") === "person" ? "#546ED3" : "#87664B",
      "color": "white",
      "line-color": "#3B3F4F",
      "target-arrow-color": "#3B3F4F"
    }
  },
  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "color": "darkred",
      "text-background-color": "#ffffff",
      "text-background-opacity": "1",
      "text-background-padding": "3",
      "width": "3",
      "target-arrow-shape": "triangle",
      "line-color": "#3B3F4F",
      "target-arrow-color": "#3B3F4F",
      "font-weight": "bold"
    }
  },
  {
    selector: "edge[label]",
    style: {
      "content": "data(id)"
    }
  },
  {
    selector: "edge.label",
    style: {
      "line-color": "orange",
      "target-arrow-color": "orange"
    }
  },

]