render() {
    const {imgClassList} = this.props;
    const {activeimgClass} = this.state;
    return (
      <div className="header-container">
        {imgClassList.map(imgClass => {
          return (
            <div 
              className={`header ${imgClass} ${(imgClass === activeimgClass)? 'active' : ''}`}
            />)
        })}
      </div>
    )
 }