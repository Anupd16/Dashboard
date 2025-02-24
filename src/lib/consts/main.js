export function getOrderStatus(status) {
  // Function to handle the common logic of formatting the status string
  const formatStatus = (status) => {
    return status.replaceAll("_", " ").toLowerCase();
  };

  // Mapping the statuses to their respective styles
  const statusStyles = {
    PLACED: {
      textClass: "text-sky-600",
      bgClass: "bg-sky-100",
    },
    CONFIRMED: {
      textClass: "text-orange-600",
      bgClass: "bg-orange-100",
    },
    SHIPPED: {
      textClass: "text-teal-600",
      bgClass: "bg-teal-100",
    },
    OUT_FOR_DELIVERY: {
      textClass: "text-yellow-600",
      bgClass: "bg-yellow-100",
    },
    DELIVERED: {
      textClass: "text-green-600",
      bgClass: "bg-green-100",
    },
    DEFAULT: {
      textClass: "text-gray-600",
      bgClass: "bg-gray-100",
    },
  };

  // Check if the status exists in the statusStyles object, otherwise default
  const statusStyle = statusStyles[status] || statusStyles.DEFAULT;

  return (
    <span
      className={`capitalize py-1 px-2 rounded-md text-xs ${statusStyle.textClass} ${statusStyle.bgClass}`}
    >
      {formatStatus(status)}
    </span>
  );
}
